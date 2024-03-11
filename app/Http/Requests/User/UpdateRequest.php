<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'email' => 'required|email|unique:users,email,' . $this->id,
            'role' => 'required|numeric',
            'status' => 'required|numeric',
            'phone' => 'required|digits:10|unique:users,phone,' . $this->id,
            'address' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Trường này là bắt buộc',
            'email.required' => 'Trường này là bắt buộc',
            'role.required' => 'Trường này là bắt buộc',
            'status.required' => 'Trường này là bắt buộc',
            'phone.required' => 'Trường này là bắt buộc',
            'address.required' => 'Trường này là bắt buộc',
            'email.unique' => 'Email đã tồn tại',
            'phone.unique' => 'Số điện thoại đã tồn tại',
        ];
    }
}
