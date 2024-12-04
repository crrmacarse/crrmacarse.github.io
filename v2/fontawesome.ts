import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faSun,
  faBars,
  faExclamationTriangle,
  faAtom,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
// @BUG: Importing more than 1 library doesn't seem to wokr
// import { faMoon } from '@fortawesome/free-regular-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add({
  faSun,
  faBars,
  faExclamationTriangle,
  faAtom,
  faExternalLinkAlt,
});
