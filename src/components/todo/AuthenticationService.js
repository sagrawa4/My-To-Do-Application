class AuthenticationSerive{
    registerSucessfulLogin(username,password){
        console.log("succ");
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user==null) return false;
        return true;
    }

    getUserLoggedInName(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user==null) return '';
        return user;
    }
}

export default new AuthenticationSerive();