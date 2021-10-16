import { Link } from "react-router-dom"

const Footer = () => {
  const footerMenu = [
    {
      id: 1,
      title: 'Marketplace',
      path: '/',
      children: [
        {
          id: 11,
          title: 'All NFTs',
          path: '/',
        },
        {
          id: 12,
          title: 'Art',
          path: '/',
        },
        {
          id: 13,
          title: 'New',
          path: '/',
        },
        {
          id: 14,
          title: 'Music',
          path: '/',
        },
        {
          id: 15,
          title: 'Virtual World',
          path: '/',
        },
        {
          id: 16,
          title: 'Trading card',
          path: '/',
        }

      ]
    },
    {
      id: 2,
      isAccount: true,
      title: 'Account',
      path: '/accounts',
      children: [
        {
          id: 21,
          title: 'My profile',
          path: '/',
        },
        {
          id: 22,
          title: 'My collections',
          path: '/',
        },
        {
          id: 23,
          title: 'My favorites',
          path: '/',
        },
        {
          id: 24,
          title: 'Setting',
          path: '/',
        }
      ]
    },
    {
      id: 3,
      title: 'Resources',
      path: '/resources',
      children: [
        {
          id: 31,
          title: 'Help center',
          path: '/',
        },
        {
          id: 32,
          title: 'Partern',
          path: '/',
        },
        {
          id: 33,
          title: 'Suggestions',
          path: '/',
        },
        {
          id: 34,
          title: 'Blog',
          path: '/',
        }
      ]
    },
  ]
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-container'>
          <div className='web'>
            <span className='brand'>
              <img className='footer-logo' src='/images/footer_logo.jpg' />
            </span>
            <p className='slogan'>
              Create, sell and collect truly rare digital artworks.
              <br />
              Powered by blockchain technology.
            </p>
            <div className='networks'>
              <a href='' target='_blank'>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href='' target='_blank'>
                <i className="fab fa-instagram"></i>
              </a>
              <a href='' target='_blank'>
                <i className="fab fa-twitter"></i>
              </a>
              <a href='' target='_blank'>
                <i className="fas fa-paper-plane"></i>
              </a>
            </div>
          </div>
          <div className='menu'>
            <ul className='cate-menu'>
              {
                footerMenu.map((item, index) => {
                  return (
                    <li key={index} className={item.isAccount ? 'cate-item account' : 'cate-item'}>
                      <Link className='title' to={item.path}>
                        {item.title}
                      </Link>
                      {
                        item.children?.length > 0 &&
                        <div className='sub-menu-container'>
                          <ul className='sub-menu'>
                            {
                              item.children.map((child, idx) => (
                                <li key={idx} className='sub-menu-item'>
                                  <Link to={child.path}>
                                    {child.title}
                                  </Link>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className='policy'>
            <hr />
            <div className='webpolicy-wrapper'>
              <span>
                © 2018 - 2021 Brandname, Inc
              </span>
              <span>
                Privacy Policy    |    Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer