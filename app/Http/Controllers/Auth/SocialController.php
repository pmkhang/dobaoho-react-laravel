<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\SocialAccounts;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }
    private function registerOrLoginUser($userData)
    {
        require_once app_path('Lib/generatePassword.php');
        require_once app_path('Lib/generateIDUser.php');
        $password = generatePassword();
        $id = generateIDUser();
        $url_image = asset('uploads/avatar.png');
        $existingUser = User::where('email', $userData->email)->first();
        if ($existingUser) {
            Auth::login($existingUser);
        } else {
            $newUser = User::create([
                'id' => $id,
                'name' => $userData->name,
                'email' => $userData->email,
                'password' => bcrypt($password),
                'avatar' => $userData->avatar ?? $url_image,
                'phone' => $userData->phone ?? null,
                'address' => $userData->address ?? "",
            ]);
            Auth::login($newUser);
        }
    }
    public function redirectToGoogleCallback()
    {
        $user = Socialite::driver('google')->user();
        $this->registerOrLoginUser($user);
        return redirect()->route('home');
    }
}
