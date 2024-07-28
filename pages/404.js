import React from 'react';
import styles from '../styles/404.module.css';

const NotFoundPage = () => {
    return (
        <div
            className={styles.background}
            style={{
                backgroundImage:
                    'url("https://s3-alpha-sig.figma.com/img/83f2/5c8c/e7d4fcf4ff31a2e8afc9b203b6c6c1a1?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OoVeYhSI2KMmzqTKAootTymhtmgY0wbR2iR83qizxuo7dRr8qiLzdi5VlkTX0l0sC4RHw35suE7xhgCl5trWwGY9dekxuCUEGif8Ww2bXx7Azie9p6crUQUAUgIsUdXh2jtKcNgsSdw69pqvN6x0smoieP8cxPXQ-GyGm0p0J3~QZWabIdXZQi2B9Z79Ess4oaqCRP~9YUAyRoZEeQmAMwf83tEhYTFXu-Uen4FVxInlby05Dg62P4Dn7BdCeMPlW2H5~388wHBe-KxPrFWvEvJ-YWDVgTUfmWYnQXP9ef8mXLmDYrQu2GhYMoVVlaziHEOJxY2Ra3pQ~zWbTNuvDw__")',
                backgroundRepeat: 'no-repeat',
            }}
        />
    );
};

export default NotFoundPage;
