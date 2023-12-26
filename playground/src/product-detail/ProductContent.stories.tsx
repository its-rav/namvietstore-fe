import type { Story, StoryDefault } from '@ladle/react';
import { ProductContent } from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-detail/ProductContent',
} satisfies StoryDefault<typeof ProductContent>;

const richText: string =
  '<p><strong>Sản phẩm XYZ</strong></p><p>Chào mừng bạn đến với trang mô tả sản phẩm XYZ. Đây là một số điểm nổi bật về sản phẩm của chúng tôi:</p><ul><li><strong>Chất liệu:</strong> Chất liệu cao cấp, bền bỉ và an toàn cho sức khỏe.</li><li><strong>Thiết kế:</strong> Thiết kế hiện đại, sang trọng và thân thiện với người dùng.</li><li><strong>Hiệu suất:</strong> Hoạt động mạnh mẽ, hiệu quả và đáng tin cậy.</li><li><strong>Ứng dụng:</strong> Sản phẩm phù hợp cho nhiều ứng dụng, từ công việc hàng ngày đến sự kiện đặc biệt.</li></ul><p>Chúng tôi tự hào giới thiệu sản phẩm XYZ với chất lượng và dịch vụ tốt nhất. Dưới đây là một số hình ảnh mô tả sản phẩm:</p><div><img src="https://picsum.photos/id/1019/1000/600/" alt="Hình ảnh sản phẩm 1`" /></div><p>Đừng ngần ngại liên hệ với chúng tôi nếu bạn cần thêm thông tin hoặc muốn đặt hàng.</p><p><em>Xin cảm ơn bạn đã quan tâm đến sản phẩm của chúng tôi!</em></p>';

export const Default: Story = () => (
  <div className='grid grid-cols-3' style={{ padding: '20px' }}>
    <div className='col-span-3 md:col-span-2'>
      <ProductContent richText={richText} />
    </div>
    <div className='col-span-3 md:col-span-1'></div>
  </div>
);
