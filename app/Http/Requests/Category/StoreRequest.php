<?php

namespace App\Http\Requests\Category;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;

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
            'name' => 'required|unique:categories,name',
            'status' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Trường này là bắt buộc',
            'name.unique' => 'Tên thể loại này đã tồn tại',
            'status.required' => 'Trường này là bắt buộc',
        ];
    }
}
