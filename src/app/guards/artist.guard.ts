import {CanActivateFn, Router} from '@angular/router';

export const artistGuard: CanActivateFn = (route, state) => {
  const router = new Router()
  const role = localStorage.getItem('role');
  if(role && role=="ROLE_ARTIST"){
    return true;
  }else {
    router.navigate(['home'])
    return false;
  }
};
