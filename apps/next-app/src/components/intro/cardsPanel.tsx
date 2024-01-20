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