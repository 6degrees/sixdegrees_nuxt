export const usePageRout = () => {
  /*
  |--------------------------------------------------------------------------
  | Locale Path
  |--------------------------------------------------------------------------
  |
  | The localePath variable is used to access the function that generates
  | locale-specific paths for routes in the application.
  |
  */
  const localePath = useLocalePath()

  /*
  |--------------------------------------------------------------------------
  | router
  |--------------------------------------------------------------------------
  |
  | The router object provides access to routing methods and properties
  | via the useRouter hook.
  |
  */
  const router = useRouter();

  /*
  |--------------------------------------------------------------------------
  | config
  |--------------------------------------------------------------------------
  |
  | The config variable is used to access the env file, which
  | contains state and actions related to user authentication.
  |
  */
  const config = useRuntimeConfig();


  /*
  |--------------------------------------------------------------------------
  | HTTP Status Routes
  |--------------------------------------------------------------------------
  |
  | Provides predefined routes for different HTTP status codes.
  |
  */
  const route = {
    HOME: {
      'name': 'home',
      'value': '/'
    },
    ABOUT: {
      'name': 'about',
      'value': '/about'
    },
    CONTACT: {
      'name': 'contact',
      'value': '/contact'
    },
  };

  /*
  |--------------------------------------------------------------------------
  | toPage Method
  |--------------------------------------------------------------------------
  |
  | The toPage method is used to navigate to a specified page using its path.
  |
  */
  const toPage = (path: any) => {
    return localePath(path);
  }


  /*
  |--------------------------------------------------------------------------
  | toId Method
  |--------------------------------------------------------------------------
  |
  | The toPage method is used to navigate to a specified page using its path.
  |
  */
  const toId = (id: string) => {
    return toPage(`${route.HOME.value}${id}`);
  }

  /*
  |--------------------------------------------------------------------------
  | Navigation Method: toHomePage
  |--------------------------------------------------------------------------
  |
  | This method is used to navigate to the home page based on the predefined
  | route.
  |
  */
  const toHomePage = () => {
    return toPage(route.HOME.value);
  }

  /*
  |--------------------------------------------------------------------------
  | Navigation Method: toAboutPage
  |--------------------------------------------------------------------------
  |
  | This method is used to navigate to the about page based on the predefined
  | route.
  |
  */
  const toAboutPage = () => {
    return toPage(route.ABOUT.value);
  }

  /*
  |--------------------------------------------------------------------------
  | Navigation Method: toContactPage
  |--------------------------------------------------------------------------
  |
  | This method is used to navigate to the contact page based on the predefined
  | route.
  |
  */
  const toContactPage = () => {
    return toPage(route.CONTACT.value);
  }

  /*
   |--------------------------------------------------------------------------
   | Return Object
   |--------------------------------------------------------------------------
   |
   | The return object contains predefined routes and a method to navigate
   | to a specified page.
   |
  */
  return {
    route,
    toPage,
    toId,
    toHomePage,
    toAboutPage,
    toContactPage,
  };
};