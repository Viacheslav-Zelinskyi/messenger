import { Message } from "components";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <Message
        avatar={`data:image/png;base64,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`}
        text={" by default date-fns forces developer to manually require locales when needed."}
        date={new Date("Wed Sep 01 2021 17:48:14 GMT+0300")}
        isMe={true}
      ></Message>
      <Message
        avatar={`https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.2.2039525430.1630022400`}
        text={" by default date-fns forces developer to manually require locales when needed."}
        date={new Date("Wed Sep 01 2021 17:48:14 GMT+0300")}
        isMe={false}
      ></Message>
    </section>
  );
};

export default Home;
