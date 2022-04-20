import { api } from "../../services/api";
import { Container } from "./styles";

interface Reply {
  id: number;
  message: string;
  postedAt: Date;
  topicFirstReply: boolean;
}

interface Topic {
  id: string;
  topicTitle: string;
  createdAt: Date;
  startedBy: string;
  pinned: boolean;
  replies: Reply[];
}

interface Forum {
  id: string;
  forumTitle: string;
  topics: Topic[]
}

interface Category {
  id: string;
  title: string;
  forums: Forum[]
}

export function Categories() {
  api.get('/categories')
  .then((data) => console.log(data));

  return (
    <Container>

    </Container>
  )
}