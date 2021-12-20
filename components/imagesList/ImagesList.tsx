import styles from './ImagesList.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';

export const ImagesList = ({data, renderItem, onLoadMore}) => {

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={onLoadMore}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className={styles.container}>
        {data.map((item) => (
          <div key={item.title} className={styles.item}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </InfiniteScroll>
  )
};