'use server';

import { InfoContactFormType } from '@namviet-fe/core-ui';
import { Gift, IntroPanelCard, Target, Vision } from '@namviet-fe/core-ui';
import { ProductCollapse } from '@namviet-fe/core-ui';
import { OutStandingArticle } from '@namviet-fe/core-ui';
import { ArticleList } from '@namviet-fe/core-ui';
import { Pagination } from '@namviet-fe/core-ui';

import IntroSection from '@/components/intro';

export async function submitFormAsync(data: InfoContactFormType) {
  // TODO add logic
  return { data };
}
export default async function IntroPage() {
  return (
    <section className='max-w-7xl mx-auto space-y-7 mb-10'>
      <IntroSection />
      <img className='h-96 w-full object-cover' src={image} />
      <div className='flex space-x-4 max-[600px]:snap-x justify-center'>
        {cards.map((card, index) => {
          return (
            <div key={index}>
              <IntroPanelCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          );
        })}
      </div>
      <div className='mx-[100px]'>
        <ProductCollapse products={filterItems} />
      </div>
      <OutStandingArticle article={article} />

      <div className='flex flex-col align-center justify-center mx-[100px] mb-[50px]'>
        <ArticleList articles={[article, article, article]} />
        <Pagination paginationPage={{ totalPages: 5, currentPage: 1 }} />
      </div>
    </section>
  );
}
// {{baseUrl}}/introduction-page?populate=banner,missions,heroSection&locale=vi-Vn

const filterItems = [
  {
    productName: 'Bếp hồng ngoại',
    productImage:
      'https://thietbinhietnv.com/storage/app/uploads/public/5df/64d/31d/5df64d31d51d8117549829.jpg',
    productDescription:
      'Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp. Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
  },
  {
    productName: 'Bếp hồng ngoại',
    productImage:
      'https://thietbinhietnv.com/storage/app/uploads/public/5df/64d/31d/5df64d31d51d8117549829.jpg',
    productDescription:
      'Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp. Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
  },
  {
    productName: 'Bếp hồng ngoại',
    productImage:
      'https://thietbinhietnv.com/storage/app/uploads/public/5df/64d/31d/5df64d31d51d8117549829.jpg',
    productDescription:
      'Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp. Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
  },
  {
    productName: 'Bếp hồng ngoại',
    productImage:
      'https://thietbinhietnv.com/storage/app/uploads/public/5df/64d/31d/5df64d31d51d8117549829.jpg',
    productDescription:
      'Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp. Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
  },
];
const cards = [
  {
    icon: <Gift />,
    title: 'Giá trị cốt lõi',
    description:
      'Chúng tôi sẽ có trách nhiệm cá nhân với nhau để tăng hiệu suất từng cá nhân trong chúng tôi, cũng như chung trách nhiệm với cácbên liên quan của chúng tôi theo các cam kết trong hợp đồng và các nghĩa vụ pháp lý. Chúng tôi sẽ là một công dân tốt và chịu trách nhiệm của mỗi cá nhân trong cộng đồng nơi chúng tôi hoạt động.',
  },
  {
    icon: <Target />,
    title: 'Sứ mệnh',
    description:
      'Chúng tôi cung cấp các dịch vụ sau bán hàng xuất sắc cho khách hàng. Chúng tôi nhanh chóng và đáp ứng nhu cầu của họ, sử dụng các nguồn lực toàn cầu của chúng tôi với đội ngũ kỹ sư bản địa giàu kinh nghiệm trong việc áp dụng công nghệ và thực hiện thành công dự án phức tạp trong môi trường đầy thử thách. Mục tiêu của chúng tôi là cung cấp giải pháp một cách sáng tạo, có giá trị và luôn định hướng đi lên.',
  },
  {
    icon: <Vision />,
    title: 'Tầm nhìn',
    description:
      'Chúng tôi cam kết về chất lượng và sự tăng trưởng không ngừng các sản phẩm, dịch vụ của chúng tôi. Liên tục nâng cao kỹ năng của con người, kỹ thuật, cập nhật thông tin về hệ thống và quy trình làm việc của chúng tôi để đảm bảo đem được chất lượng cao nhất, chi phí thấp nhất, tăng giá trị và sự tận tâm nhất đến cho khách hàng.',
  },
];
const image =
  'data:image/jpeg;base64,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';
const article = {
  title: 'Article title',
  image: 'https://picsum.photos/200',
  content:
    'Nhiều phụ nữ hiện nay vẫn bị đóng khung trong các khuôn mẫu, chuẩn mực về vẻ đẹp và vai trò của nữ giới. Đứng trước thực trạng đó, Unilever nhận thức rõ vai trò, trách nhiệm của mình trong việc xóa bỏ các định kiến và khuôn khổ tiêu cực.',
  date: '2021-09-09',
};
