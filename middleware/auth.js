export default ( context ) => {

    const { redirect } = context;
    const logged = true;

    if(!logged) {
        return redirect('/');
    }

}