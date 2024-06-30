export interface Post {
  id?: string
  image: string
  category: string
  name: string
  price: number
  viewer: number
  author: User
  authorId?: string
}

export interface User {
  id?: string
  email: string
  name: string
}

export const mockUserInfo: User = {
  // id: "user_1",
  email: "m.contact@gmail.com",
  name: "Mai Chan Cuong"
}


export interface SectionType {
  title: string
  viewMoreLink: string
  slug: string
  posts: Post[]
}

export const mockSection: SectionType[] = [
  {
    title: "NEW SOURCE CODE",
    slug: "new-source-code",
    viewMoreLink: "/source-code/view-more",
    posts: [
      {
        // id: 'post_1',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_2',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_3',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_4',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_5',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_6',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_7',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_8',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_9',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_10',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_11',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_12',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
    ]
  },
  {
    title: "TOP WEBSITES",
    viewMoreLink: "/source-code/view-more",
    slug: "top-websites",
    posts: [
      {
        // id: 'post_1',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_2',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_3',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_4',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_5',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_6',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_7',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_8',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_9',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_10',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_11',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_12',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
    ]
  },
  {
    title: "TOP SOFTWARES",
    viewMoreLink: "/source-code/view-more",
    slug: "top-softwares",
    posts: [
      {
        // id: 'post_1',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_2',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_3',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_4',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_5',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_6',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_7',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_8',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_9',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_10',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_11',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_12',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
    ]
  },
  {
    title: "TOP APPS",
    viewMoreLink: "/source-code/view-more",
    slug: "top-apps",
    posts: [
      {
        // id: 'post_1',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_2',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_3',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_4',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_5',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_6',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_7',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_8',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_9',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_10',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_11',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_12',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
    ]
  },
  {
    title: "TOP GAMES",
    viewMoreLink: "/source-code/view-more",
    slug: "top-games",
    posts: [
      {
        // id: 'post_1',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_2',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_3',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_4',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_5',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_6',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_7',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_8',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_9',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
      {
        // id: 'post_10',
        image: "/assets/posts/post_3.jpg",
        category: "Website > Bán hàng - TMĐT",
        name: "Code PHP & Mysql Website bán máy tính - đồ điện tử - linh kiện máy tính laptop",
        price: 100000,
        viewer: 1503,
        author: mockUserInfo
      },
      {
        // id: 'post_11',
        image: "/assets/posts/post_2.jpg",
        category: "Website > Giải trí",
        name: "Source code web nghe nhạc mp3 online MVC viết bằng [PHP & MySQL] có kèm bản word + slide",
        price: 350000,
        viewer: 356,
        author: mockUserInfo
      },
      {
        // id: 'post_12',
        image: "/assets/posts/post_1.jpg",
        category: "Website > Giải trí",
        name: "(ReactJS + NodeJS + SCSS) Sharecode Web xem phim bằng cách leak data từ API kkphim, ophim",
        price: 300000,
        viewer: 1425,
        author: mockUserInfo
      },
    ]
  }
]
