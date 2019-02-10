import routes from '../routes'
export const home = (req,res) => res.render('users', {pageTitle: 'Users'})

export const editProfile = (req,res) => res.render('editProfile', {pageTitle: 'Edit Profile' })

export const changePassword = (req,res) => res.render('changePassword', {pageTitle: 'Change Password'})

export const userDetail = (req,res) => res.render('userDetail', {pageTitle: 'User Detail'})

export const getJoin = (req,res) => {
    res.render('join', {pageTitle: 'Join'})
}

export const postJoin = (req,res) => {
    console.log(req.body)
    const {
        body: {name, email, password, password2}
    } = req

    if (password !== password2) {
        res.status(400).render('join', {pageTitle: 'Join'})
    } else {
        // To do: register user
        // To do: log user in
        res.redirect(routes.home)
    }
    
}

export const getLogin = (req, res) => res.render('login', {pageTitle: 'Login'})

export const postLogin = (req, res) => {
    res.redirect(routes.home)
}

export const logout = (req,res) => {
    // To do: Process Log out
    res.redirect(routes.home)
}