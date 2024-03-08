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
            'name' => [
                'required',
                'string',
                'max:255',
                function ($attribute, $value, $fail) {
                    if (
                        $this->input('status') == 0 &&
                        DB::table('categories')
                        ->where('name', $value)
                        ->where('status', 0)
                        ->exists()
                    ) {
                        $fail('Tên đã tồn tại.');
                    }
                },
            ],
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
