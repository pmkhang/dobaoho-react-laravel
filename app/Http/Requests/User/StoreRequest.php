<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            'password' => 'required|string|confirmed|min:8|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/',
            'password_confirmation' => 'required|same:password',
            'role' => 'required|numeric',
            'status' => 'required|numeric',
            'phone' => 'required|digits:10|unique:users,phone',
            'address' => 'required|string',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Trường này là bắt buộc',
            'email.required' => 'Trường này là bắt buộc',
            'password.required' => 'Trường này là bắt buộc',
            'role.required' => 'Trường này là bắt buộc',
            'status.required' => 'Trường này là bắt buộc',
            'phone.required' => 'Trường này là bắt buộc',
            'address.required' => 'Trường này là bắt buộc',
            'password.regex' => 'Mật khẩu phải bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt',
            'email.unique' => 'Email đã tồn tại',
            'phone.unique' => 'Số điện thoại đã tồn tại',
            'password_confirmation.same' => 'Xác nhận mật khẩu phải trùng với mật khẩu',
            'password_confirmation.required' => 'Trường này là bắt buộc',
        ];
    }
}
