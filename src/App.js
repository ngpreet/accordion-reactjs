import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <>
      <h1 className="header">FAQ</h1>
      <div>
        <Accordion data={faqs} />
      </div>
    </>
  );
}

function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem
          num={i}
          title={faq.title}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({
  num,
  title,
  text,
  currentOpen,
  setCurrentOpen,
  children,
}) {
  const isOpen = num === currentOpen;

  function handleToggle() {
    setCurrentOpen(isOpen ? null : num);
  }

  return (
    <div className={isOpen ? "open item" : "item"} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{children}</div> : ""}
    </div>
  );
}
