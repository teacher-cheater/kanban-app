import { Link } from "react-router-dom";
import AppRouter from "../../../app/providers/router/AppRouter";

export default function NotFoundPage() {
  return (
    <div>
      <h3>Страница не найдена</h3>
      <Link to={AppRouter.MAIN}>На главную</Link>
    </div>
  );
}
