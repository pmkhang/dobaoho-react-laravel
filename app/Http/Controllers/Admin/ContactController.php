<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function contactDetail($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->update(['status' => 1]);
        return response()->json([
            'contact' => $contact,
            'success' => true
        ]);
    }
}
