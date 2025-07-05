import cls from "./CategoriesLabel.module.scss";

export default function CategoriesLabel() {
  return (
    <div>
      <div className={cls.categories}>
        <p className={`${cls.categories__p} subttl`}>Категория</p>
        <div className={cls.categories__themes}>
          <div className={`${cls.categories__theme} _orange _active-category`}>
            <p className="_orange">Web Design</p>
          </div>
          <div className={`${cls.categories__theme} _green`}>
            <p className="_green">Research</p>
          </div>
          <div className={`${cls.categories__theme} _purple`}>
            <p className="_purple">Copywriting</p>
          </div>
        </div>
      </div>
    </div>
  );
}
