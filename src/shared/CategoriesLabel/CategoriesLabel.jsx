import { categories } from "../lib/categories";
import cls from "./CategoriesLabel.module.scss";

export default function CategoriesLabel(props) {
  const { topic, setTask, task } = props;

  return (
    <div>
      <div className={cls.categories}>
        <p className={`${cls.categories__p} subttl`}>Категория</p>
        <div className={cls.categories__themes}>
          {categories.map(item => (
            <div
              className={`
                ${cls.categories__theme}
                ${item.className}
                ${topic === item.id ? "_active-category" : ""}
              `}
              key={item.id}
              onClick={() => setTask({ ...task, topic: item.id })}
            >
              <p className={item.className}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
