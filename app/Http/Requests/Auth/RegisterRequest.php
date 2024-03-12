<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/',
            'password_confirmation' => 'required|same:password',
            'phone' => 'required|digits:10|unique:users,phone',
            'address' => 'required|string',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Trường này là bắt buộc',
            'email.required' => 'Trường này là bắt buộc',
            'phone.required' => 'Trường này là bắt buộc',
            'address.required' => 'Trường này là bắt buộc',
            'email.unique' => 'Email đã tồn tại',
            'phone.unique' => 'Số điện thoại đã tồn tại',
            'phone.digits' => 'Số điện thoại phải có 10 chữ số.',
            'password.regex' => 'Mật khẩu phải bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt',
            'password.required' => 'Trường này là bắt buộc',
            'password_confirmation.same' => 'Xác nhận mật khẩu phải trùng với mật khẩu',
            'password_confirmation.required' => 'Trường này là bắt buộc',
        ];
    }
}
