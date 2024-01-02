// var cards = [
//   {
//     icon: 'icon',
//     title: 'Gia tri cot loi',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
//   },
//   {
//     icon: 'icon',
//     title: 'Gia tri cot loi',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
//   },
//   {
//     icon: 'icon',
//     title: 'Gia tri cot loi',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
//   }
// ]

const IntroPanelCards = ({cards}: Array<{
  icon: string;
  title: string;
  description: string;
}>) => {
  return (
    <div className="">
      {cards.map((card: {
        icon: string;
        title: string;
        description: string;
      }) => {
        <img src={card.icon}/>
        // code logic here
      })}
    </div>
  );
};