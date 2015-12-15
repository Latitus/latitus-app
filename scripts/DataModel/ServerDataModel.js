/**
 * Created by phaml_000 on 12/9/2015.
 */

App.service('ServerDataModel', function(BaseResponse){
    this.users = [
        {
            userId: 1,
            username: 'admin',
            password: 'admin',
            email: 'admin@lachitus.com'
        },
        {
            userId: 2,
            username: 'user',
            password: 'user',
            email: 'admin@lachitus.com'
        }
    ];

    this.slides = [
        {
            name: "Slide 1",
            url:""
        },
        {
            name: "Slide 2",
            url:""
        },        {
            name: "Slide 3",
            url:""
        },        {
            name: "Slide 4",
            url:""
        },        {
            name: "Slide 5",
            url:""
        },
    ];

    this.profile = {
        name:"ABC",
        phone:"0000000",
        profileImage:"",
        facebook:"",
        twitter:"",
        quote:""
    };

    this.category = [
        {
            categoryId: 1,
            categoryName: "Clothers",
            categoryImage: ""
        },
        {
            categoryId: 2,
            categoryName: "Clothers",
            categoryImage: ""
        },
        {
            categoryId: 3,
            categoryName: "Clothers",
            categoryImage: ""
        },
        {
            categoryId: 4,
            categoryName: "Clothers",
            categoryImage: ""
        },
        {
            categoryId: 5,
            categoryName: "Clothers",
            categoryImage: ""
        }
    ]
    this.SignUp = function(signUpData){
        signUpData.userId = NewId();
        this.users.push(signUpData);
        return BaseResponse.ReturnData({success:true});
    }
    this.SignIn = function(signInData){
        for(var i=0; i<this.users.length; i++){
            if(this.users[i].username == signInData.username && this.users[i].password == signInData.password){
                return BaseResponse.ReturnData({success:true});
            }
        }
        return BaseResponse.ReturnData({success:false});
    }

    function GetUsers(){
        return this.users;
    }

    function NewId() {
        var currentIds = $.map(GetUsers(), function(user) { return user.userId; });
        var maxId = Math.max.apply(Math, currentIds);
        return maxId + 1;
    };
});