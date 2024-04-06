<?php

namespace App\Http\Requests\Product;

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
            'desc' => 'required|string',
            'sub_desc' => 'required|string',
            'category_id' => 'required',
            'price' => 'required|numeric',
            'images' => 'required|array',
            'images.*' => 'mimes:jpeg,png,jpg,gif',
            'status' => 'required|numeric',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Trường này là bắt buộc',
            'desc.required' => 'Trường này là bắt buộc',
            'sub_desc.required' => 'Trường này là bắt buộc',
            'category_id.required' => 'Trường này là bắt buộc',
            'price.required' => 'Trường này là bắt buộc',
            'price.numeric' => 'Giá sản phẩm phải là số',
            'status.required' => 'Trường này là bắt buộc',
            'images.required' => 'Trường này là bắt buộc',
        ];
    }
}
