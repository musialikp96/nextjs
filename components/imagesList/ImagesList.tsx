import styles from './ImagesList.module.css';

export const ImagesList = ({data, renderItem}) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div key={item.title} className={styles.item}>
          {renderItem(item)}
        </div>
      ))}
      <div className={styles.item}>
        <button>Load more</button>
      </div>
    </div>
  )
};