INSERT INTO categories (id, name, status, parent_id, created_at, updated_at) VALUES
('do-bao-ho-chong-chay', 'Đồ bảo hộ chống cháy', 1, 0, NOW(), NOW()),
('do-bao-ho-lao-dong', 'Đồ bảo hộ lao động', 1, 0, NOW(), NOW()),
('ao-bao-ho', 'Áo bảo hộ', 1, 0, NOW(), NOW()),
('mu-bao-ho', 'Mũ bảo hộ', 1, 0, NOW(), NOW()),
('gang-tay-bao-ho', 'Găng tay bảo hộ', 1, 0, NOW(), NOW()),
('khan-trum-bao-ho', 'Khăn trùm bảo hộ', 1, 0, NOW(), NOW()),
('giay-bao-ho', 'Giày bảo hộ', 1, 0, NOW(), NOW()),
('quan-bao-ho', 'Quần bảo hộ', 1, 0, NOW(), NOW()),
('kinh-bao-ho', 'Kính bảo hộ', 1, 0, NOW(), NOW()),
('thiet-bi-bao-ho', 'Thiết bị bảo hộ', 1, 0, NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-1A', 'Áo chống cháy', 'Áo chống cháy cho công nhân', 50000, 4, 1, 'do-bao-ho-chong-chay', NOW(), NOW()),
('SP2024-2A', 'Mũ chống cháy', 'Mũ bảo hộ chống cháy', 30000, 5, 1, 'do-bao-ho-chong-chay', NOW(), NOW()),
('SP2024-3A', 'Găng tay chống cháy', 'Găng tay chống cháy chất lượng cao', 20000, 4, 1, 'do-bao-ho-chong-chay', NOW(), NOW()),
('SP2024-4A', 'Quần chống cháy', 'Quần bảo hộ chống cháy', 70000, 3, 1, 'do-bao-ho-chong-chay', NOW(), NOW()),
('SP2024-5A', 'Kính chống cháy', 'Kính bảo hộ chống cháy', 40000, 4, 1, 'do-bao-ho-chong-chay', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-6A', 'Áo lao động', 'Áo bảo hộ lao động', 45000, 4, 1, 'do-bao-ho-lao-dong', NOW(), NOW()),
('SP2024-7A', 'Mũ lao động', 'Mũ bảo hộ lao động', 25000, 5, 1, 'do-bao-ho-lao-dong', NOW(), NOW()),
('SP2024-8A', 'Găng tay lao động', 'Găng tay chất lượng cao cho công nhân', 18000, 4, 1, 'do-bao-ho-lao-dong', NOW(), NOW()),
('SP2024-9A', 'Quần lao động', 'Quần bảo hộ lao động chất lượng tốt', 60000, 3, 1, 'do-bao-ho-lao-dong', NOW(), NOW()),
('SP2024-10A', 'Kính lao động', 'Kính bảo hộ lao động', 35000, 4, 1, 'do-bao-ho-lao-dong', NOW(), NOW());


INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-11A', 'Áo bảo hộ cao cấp', 'Áo bảo hộ chất liệu cao cấp', 60000, 4, 1, 'ao-bao-ho', NOW(), NOW()),
('SP2024-12A', 'Áo bảo hộ chống nắng', 'Áo bảo hộ chống nắng UV', 35000, 5, 1, 'ao-bao-ho', NOW(), NOW()),
('SP2024-13A', 'Áo bảo hộ chống cắt', 'Áo bảo hộ chống cắt vật liệu sắc bén', 45000, 4, 1, 'ao-bao-ho', NOW(), NOW()),
('SP2024-14A', 'Áo bảo hộ phản quang', 'Áo bảo hộ phản quang an toàn', 55000, 3, 1, 'ao-bao-ho', NOW(), NOW()),
('SP2024-15A', 'Áo bảo hộ chống hóa chất', 'Áo bảo hộ chống hóa chất độ bền cao', 70000, 4, 1, 'ao-bao-ho', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-16A', 'Mũ bảo hộ cứng cáp', 'Mũ bảo hộ chất liệu cứng cáp', 25000, 4, 1, 'mu-bao-ho', NOW(), NOW()),
('SP2024-17A', 'Mũ bảo hộ chống va đập', 'Mũ bảo hộ chống va đập', 20000, 5, 1, 'mu-bao-ho', NOW(), NOW()),
('SP2024-18A', 'Mũ bảo hộ nón', 'Mũ bảo hộ nón dễ dàng sử dụng', 18000, 4, 1, 'mu-bao-ho', NOW(), NOW()),
('SP2024-19A', 'Mũ bảo hộ vải', 'Mũ bảo hộ vải thoáng khí', 30000, 3, 1, 'mu-bao-ho', NOW(), NOW()),
('SP2024-20A', 'Mũ bảo hộ đèn', 'Mũ bảo hộ có đèn LED tích hợp', 35000, 4, 1, 'mu-bao-ho', NOW(), NOW());



INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-21A', 'Găng tay bảo hộ cao cấp', 'Găng tay bảo hộ chất liệu cao cấp', 40000, 4, 1, 'gang-tay-bao-ho', NOW(), NOW()),
('SP2024-22A', 'Găng tay bảo hộ chống hóa chất', 'Găng tay bảo hộ chống hóa chất', 35000, 5, 1, 'gang-tay-bao-ho', NOW(), NOW()),
('SP2024-23A', 'Găng tay bảo hộ chống cắt', 'Găng tay bảo hộ chống cắt chất lượng cao', 30000, 4, 1, 'gang-tay-bao-ho', NOW(), NOW()),
('SP2024-24A', 'Găng tay bảo hộ chống nhiệt', 'Găng tay bảo hộ chống nhiệt', 25000, 3, 1, 'gang-tay-bao-ho', NOW(), NOW()),
('SP2024-25A', 'Găng tay bảo hộ vải', 'Găng tay bảo hộ vải thoáng khí', 20000, 4, 1, 'gang-tay-bao-ho', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-26A', 'Khăn trùm bảo hộ cao cấp', 'Khăn trùm bảo hộ chất liệu cao cấp', 35000, 4, 1, 'khan-trum-bao-ho', NOW(), NOW()),
('SP2024-27A', 'Khăn trùm bảo hộ chống hóa chất', 'Khăn trùm bảo hộ chống hóa chất', 30000, 5, 1, 'khan-trum-bao-ho', NOW(), NOW()),
('SP2024-28A', 'Khăn trùm bảo hộ chống nhiệt', 'Khăn trùm bảo hộ chống nhiệt', 25000, 4, 1, 'khan-trum-bao-ho', NOW(), NOW()),
('SP2024-29A', 'Khăn trùm bảo hộ vải', 'Khăn trùm bảo hộ vải thoáng khí', 20000, 3, 1, 'khan-trum-bao-ho', NOW(), NOW()),
('SP2024-30A', 'Khăn trùm bảo hộ chống nắng', 'Khăn trùm bảo hộ chống nắng UV', 28000, 4, 1, 'khan-trum-bao-ho', NOW(), NOW());


INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-31A', 'Giày bảo hộ cao cấp', 'Giày bảo hộ chất liệu cao cấp', 80000, 4, 1, 'giay-bao-ho', NOW(), NOW()),
('SP2024-32A', 'Giày bảo hộ chống nước', 'Giày bảo hộ chống nước', 70000, 5, 1, 'giay-bao-ho', NOW(), NOW()),
('SP2024-33A', 'Giày bảo hộ chống đinh', 'Giày bảo hộ chống đinh', 85000, 4, 1, 'giay-bao-ho', NOW(), NOW()),
('SP2024-34A', 'Giày bảo hộ chống va đập', 'Giày bảo hộ chống va đập', 90000, 3, 1, 'giay-bao-ho', NOW(), NOW()),
('SP2024-35A', 'Giày bảo hộ thoáng khí', 'Giày bảo hộ thoáng khí', 75000, 4, 1, 'giay-bao-ho', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-36A', 'Quần bảo hộ cao cấp', 'Quần bảo hộ chất liệu cao cấp', 90000, 4, 1, 'quan-bao-ho', NOW(), NOW()),
('SP2024-37A', 'Quần bảo hộ chống nước', 'Quần bảo hộ chống nước', 85000, 5, 1, 'quan-bao-ho', NOW(), NOW()),
('SP2024-38A', 'Quần bảo hộ chống đinh', 'Quần bảo hộ chống đinh', 95000, 4, 1, 'quan-bao-ho', NOW(), NOW()),
('SP2024-39A', 'Quần bảo hộ chống va đập', 'Quần bảo hộ chống va đập', 100000, 3, 1, 'quan-bao-ho', NOW(), NOW()),
('SP2024-40A', 'Quần bảo hộ thoáng khí', 'Quần bảo hộ thoáng khí', 80000, 4, 1, 'quan-bao-ho', NOW(), NOW());


INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-41A', 'Kính bảo hộ chống bụi', 'Kính bảo hộ chống bụi', 35000, 4, 1, 'kinh-bao-ho', NOW(), NOW()),
('SP2024-42A', 'Kính bảo hộ chống hóa chất', 'Kính bảo hộ chống hóa chất', 40000, 5, 1, 'kinh-bao-ho', NOW(), NOW()),
('SP2024-43A', 'Kính bảo hộ chống tia UV', 'Kính bảo hộ chống tia UV', 45000, 4, 1, 'kinh-bao-ho', NOW(), NOW()),
('SP2024-44A', 'Kính bảo hộ chống va đập', 'Kính bảo hộ chống va đập', 50000, 3, 1, 'kinh-bao-ho', NOW(), NOW()),
('SP2024-45A', 'Kính bảo hộ chống nhiệt', 'Kính bảo hộ chống nhiệt', 55000, 4, 1, 'kinh-bao-ho', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-46A', 'Bình cứu hỏa', 'Bình cứu hỏa chuyên nghiệp', 150000, 4, 1, 'thiet-bi-bao-ho', NOW(), NOW()),
('SP2024-47A', 'Phao cứu sinh', 'Phao cứu sinh chất lượng cao', 80000, 5, 1, 'thiet-bi-bao-ho', NOW(), NOW()),
('SP2024-48A', 'Máy lọc không khí', 'Máy lọc không khí chất lượng', 1200000, 4, 1, 'thiet-bi-bao-ho', NOW(), NOW()),
('SP2024-49A', 'Bảng hiệu thoát hiểm', 'Bảng hiệu thoát hiểm rõ ràng', 50000, 3, 1, 'thiet-bi-bao-ho', NOW(), NOW()),
('SP2024-50A', 'Đèn pin cảnh báo', 'Đèn pin cảnh báo sự cố', 40000, 4, 1, 'thiet-bi-bao-ho', NOW(), NOW());


INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-51A', 'Bình chữa cháy', 'Bình chữa cháy cầm tay', 100000, 4, 1, 'do-bao-ho-chong-chay', NOW(), NOW()),
('SP2024-52A', 'Áo chống cháy chuyên dụng', 'Áo chống cháy chuyên dụng', 80000, 5, 1, 'do-bao-ho-chong-chay', NOW(), NOW()),
('SP2024-53A', 'Mặt nạ chống khói', 'Mặt nạ chống khói chất lượng cao', 50000, 4, 1, 'do-bao-ho-chong-chay', NOW(), NOW()),
('SP2024-54A', 'Găng tay chống nhiệt', 'Găng tay chống nhiệt', 30000, 3, 1, 'do-bao-ho-chong-chay', NOW(), NOW()),
('SP2024-55A', 'Quần áo chống nhiệt', 'Quần áo chống nhiệt', 120000, 4, 1, 'do-bao-ho-chong-chay', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-56A', 'Găng tay chống va đập', 'Găng tay chống va đập', 20000, 4, 1, 'do-bao-ho-lao-dong', NOW(), NOW()),
('SP2024-57A', 'Quần áo chống tĩnh điện', 'Quần áo chống tĩnh điện', 60000, 5, 1, 'do-bao-ho-lao-dong', NOW(), NOW()),
('SP2024-58A', 'Giày bảo hộ chống va đập', 'Giày bảo hộ chống va đập', 75000, 4, 1, 'do-bao-ho-lao-dong', NOW(), NOW()),
('SP2024-59A', 'Mũ bảo hộ chống va đập', 'Mũ bảo hộ chống va đập', 30000, 3, 1, 'do-bao-ho-lao-dong', NOW(), NOW()),
('SP2024-60A', 'Kính bảo hộ chống bụi', 'Kính bảo hộ chống bụi', 40000, 4, 1, 'do-bao-ho-lao-dong', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-61A', 'Áo bảo hộ chống tĩnh điện', 'Áo bảo hộ chống tĩnh điện', 70000, 4, 1, 'ao-bao-ho', NOW(), NOW()),
('SP2024-62A', 'Áo bảo hộ chống hóa chất', 'Áo bảo hộ chống hóa chất', 80000, 5, 1, 'ao-bao-ho', NOW(), NOW()),
('SP2024-63A', 'Áo bảo hộ chống va đập', 'Áo bảo hộ chống va đập', 85000, 4, 1, 'ao-bao-ho', NOW(), NOW()),
('SP2024-64A', 'Áo bảo hộ chống nhiệt', 'Áo bảo hộ chống nhiệt', 95000, 3, 1, 'ao-bao-ho', NOW(), NOW()),
('SP2024-65A', 'Áo bảo hộ chống đinh', 'Áo bảo hộ chống đinh', 90000, 4, 1, 'ao-bao-ho', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-66A', 'Mũ bảo hộ chống hóa chất', 'Mũ bảo hộ chống hóa chất', 40000, 4, 1, 'mu-bao-ho', NOW(), NOW()),
('SP2024-67A', 'Mũ bảo hộ chống nhiệt', 'Mũ bảo hộ chống nhiệt', 45000, 5, 1, 'mu-bao-ho', NOW(), NOW()),
('SP2024-68A', 'Mũ bảo hộ chống bụi', 'Mũ bảo hộ chống bụi', 35000, 4, 1, 'mu-bao-ho', NOW(), NOW()),
('SP2024-69A', 'Mũ bảo hộ chống va đập', 'Mũ bảo hộ chống va đập', 30000, 3, 1, 'mu-bao-ho', NOW(), NOW()),
('SP2024-70A', 'Mũ bảo hộ thoáng khí', 'Mũ bảo hộ thoáng khí', 38000, 4, 1, 'mu-bao-ho', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-71A', 'Găng tay bảo hộ chống tĩnh điện', 'Găng tay bảo hộ chống tĩnh điện', 30000, 4, 1, 'gang-tay-bao-ho', NOW(), NOW()),
('SP2024-72A', 'Găng tay bảo hộ chống hóa chất', 'Găng tay bảo hộ chống hóa chất', 35000, 5, 1, 'gang-tay-bao-ho', NOW(), NOW()),
('SP2024-73A', 'Găng tay bảo hộ chống nhiệt', 'Găng tay bảo hộ chống nhiệt', 40000, 4, 1, 'gang-tay-bao-ho', NOW(), NOW()),
('SP2024-74A', 'Găng tay bảo hộ chống nước', 'Găng tay bảo hộ chống nước', 30000, 4, 1, 'gang-tay-bao-ho', NOW(), NOW()),

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-75A', 'Găng tay bảo hộ chống va đập', 'Găng tay bảo hộ chống va đập', 25000, 3, 1, 'gang-tay-bao-ho', NOW(), NOW()),
('SP2024-76A', 'Găng tay bảo hộ chống cắt', 'Găng tay bảo hộ chống cắt', 30000, 4, 1, 'gang-tay-bao-ho', NOW(), NOW()),
('SP2024-77A', 'Găng tay bảo hộ chống bụi', 'Găng tay bảo hộ chống bụi', 28000, 3, 1, 'gang-tay-bao-ho', NOW(), NOW()),
('SP2024-78A', 'Găng tay bảo hộ vải', 'Găng tay bảo hộ vải thoáng khí', 22000, 4, 1, 'gang-tay-bao-ho', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-79A', 'Khăn trùm bảo hộ chống tĩnh điện', 'Khăn trùm bảo hộ chống tĩnh điện', 30000, 4, 1, 'khan-trum-bao-ho', NOW(), NOW()),
('SP2024-80A', 'Khăn trùm bảo hộ chống nhiệt', 'Khăn trùm bảo hộ chống nhiệt', 35000, 5, 1, 'khan-trum-bao-ho', NOW(), NOW()),
('SP2024-81A', 'Khăn trùm bảo hộ chống hóa chất', 'Khăn trùm bảo hộ chống hóa chất', 32000, 4, 1, 'khan-trum-bao-ho', NOW(), NOW()),
('SP2024-82A', 'Khăn trùm bảo hộ chống va đập', 'Khăn trùm bảo hộ chống va đập', 28000, 3, 1, 'khan-trum-bao-ho', NOW(), NOW()),
('SP2024-83A', 'Khăn trùm bảo hộ chống bụi', 'Khăn trùm bảo hộ chống bụi', 25000, 4, 1, 'khan-trum-bao-ho', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-84A', 'Giày bảo hộ chống tĩnh điện', 'Giày bảo hộ chống tĩnh điện', 70000, 4, 1, 'giay-bao-ho', NOW(), NOW()),
('SP2024-85A', 'Giày bảo hộ chống nước', 'Giày bảo hộ chống nước', 80000, 5, 1, 'giay-bao-ho', NOW(), NOW()),
('SP2024-86A', 'Giày bảo hộ chống đinh', 'Giày bảo hộ chống đinh', 75000, 4, 1, 'giay-bao-ho', NOW(), NOW()),
('SP2024-87A', 'Giày bảo hộ chống va đập', 'Giày bảo hộ chống va đập', 80000, 3, 1, 'giay-bao-ho', NOW(), NOW()),
('SP2024-88A', 'Giày bảo hộ chống hóa chất', 'Giày bảo hộ chống hóa chất', 90000, 4, 1, 'giay-bao-ho', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-89A', 'Quần bảo hộ chống tĩnh điện', 'Quần bảo hộ chống tĩnh điện', 60000, 4, 1, 'quan-bao-ho', NOW(), NOW()),
('SP2024-90A', 'Quần bảo hộ chống nước', 'Quần bảo hộ chống nước', 70000, 5, 1, 'quan-bao-ho', NOW(), NOW()),
('SP2024-91A', 'Quần bảo hộ chống đinh', 'Quần bảo hộ chống đinh', 65000, 4, 1, 'quan-bao-ho', NOW(), NOW()),
('SP2024-92A', 'Quần bảo hộ chống va đập', 'Quần bảo hộ chống va đập', 70000, 3, 1, 'quan-bao-ho', NOW(), NOW()),
('SP2024-93A', 'Quần bảo hộ chống hóa chất', 'Quần bảo hộ chống hóa chất', 80000, 4, 1, 'quan-bao-ho', NOW(), NOW());

INSERT INTO products (id, name, `desc`, price, rate_avg, `status`, category_id, created_at, updated_at) VALUES
('SP2024-94A', 'Kính bảo hộ chống bụi', 'Kính bảo hộ chống bụi', 40000, 4, 1, 'kinh-bao-ho', NOW(), NOW()),
('SP2024-95A', 'Kính bảo hộ chống hóa chất', 'Kính bảo hộ chống hóa chất', 45000, 5, 1, 'kinh-bao-ho', NOW(), NOW()),
('SP2024-96A', 'Kính bảo hộ chống tia UV', 'Kính bảo hộ chống tia UV', 50000, 4, 1, 'kinh-bao-ho', NOW(), NOW()),
('SP2024-97A', 'Kính bảo hộ chống va đập', 'Kính bảo hộ chống va đập', 55000, 3, 1, 'kinh-bao-ho', NOW(),NOW()),
