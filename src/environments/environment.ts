// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // apiUrl: 'http://127.0.0.1:8000/api',
    // //  apiUrl:"http://173.249.8.175:9005/api",
    apiUrl:"http://161.97.99.88:9099/api",

    authUrl: 'https://www.lightoil.cm',

    pusher: {
        key: 'c8686a07ccd742ec6564',
        cluster: 'mt1',
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
