<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Client/Contact');
    }
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|email',
                'message' => 'required|string',
                'title' => 'required|string',
                'phone' => 'required|string|regex:/(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/',
            ], [
                'phone.regex' => 'Số điện thoại không đúng định dạng',
                'required' => 'Trường này là bắt buộc',
                'email.email' => 'Email không đúng định dạng',
            ]);

            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message,
                'title' => $request->title,
                'phone' => $request->phone,
            ];
            Contact::create($data);
            return response()->json([
                'success' => 'Gửi liên hệ thành công',
                'status' => true
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'errors' => $e->validator->errors()->all(),
                'status' => false
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
                'status' => false
            ]);
        }
    }
}
