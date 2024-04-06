<?php

namespace App\Http\Requests\Product;

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
            'name' => 'required|string|unique:categories,name,' . $this->id,
            'desc' => 'required|string',
            'sub_desc' => 'required|string',
            'category_id' => 'required',
            'price' => 'required|numeric',
            'status' => 'required|integer',

        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Trường này là bắt buộc',
            'name.unique' => 'Tên sản phẩm đã tồn tại',
            'desc.required' => 'Trường này là bắt buộc',
            'sub_desc.required' => 'Trường này là bắt buộc',
            'category_id.required' => 'Trường này là bắt buộc',
            'price.required' => 'Trường này là bắt buộc',
            'status.required' => 'Trường này là bắt buộc',
        ];
    }
}
