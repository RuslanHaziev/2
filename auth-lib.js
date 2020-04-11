let allUsers = [];

let allRights = [];

let allGroups = [];

// Возвращает массив всех пользователей.
function users() {
    return allUsers;
}

//Создает нового пользователя с указанным логином username и паролем password, возвращает созданного пользователя.
function createUser(name, password) {
    let user = {
        name: name,
        password: password,
        groups: [] 
    }
    allUsers.push(user)

    return user;
}

// Удаляет пользователя user
function deleteUser(user) {
    if (!user) {
        throw Error ("user false")
    }

    if (allUsers.indexOf(user) === -1) {
        throw Error ("user удален")
    }

    allUsers.splice(allUsers.indexOf(user), 1);

}

// Возвращает массив групп, к которым принадлежит пользователь user
function userGroups(user) {
    return user.groups
}

// Добавляет пользователя user в группу group
function addUserToGroup(user, group) {
    //debugger;
    if (group === null) {
        throw Error ("group=null")
    }

    if (user === null) {
        throw Error ("user=null")
    }

    if (group === undefined) {
        throw Error ("group=undefined")
    }

    if (user === undefined) {
        throw Error ("user=undefined")
    }

    if (allUsers.indexOf(user) === -1) {
        throw Error ("user удален")
    }

    if (allGroups.indexOf(group) === -1) {
        throw Error ("group удален")
    }

    user.groups.push(group);
    //debugger;
}

// Удаляет пользователя user из группы group. Должна бросить исключение, если пользователя user нет в группе group
function removeUserFromGroup(user, group) {
    //debugger;
  
    if (group === null) {
        throw Error ("group=null")
    }

    if (user === null) {
        throw Error ("user=null")
    }

    if (group === undefined) {
        throw Error ("group=undefined")
    }

    if (user === undefined) {
        throw Error ("user=undefined")
    }
    
    if (allUsers.indexOf(user) === -1) {
        throw Error ("user удален")
    }

    if (allGroups.indexOf(group) === -1) {
        throw Error ("group удален")
    }

    if (user.groups.indexOf(group) === -1) {
        throw Error (" group удален")
    }

    user.groups.splice(user.groups.indexOf(user), 1);

}

// Возвращает массив прав
function rights() {
    return allRights;
}

// Создает новое право с именем name и возвращает его
function createRight(name) {
    let right = "right" + name
    
    allRights.push(right)
    
    return right;
}

// Удаляет право right
function deleteRight(right) {

    if (right === null) {
        throw Error ("right=null")
    }

    if (right === undefined) {
        throw Error ("right=undefined")
    }

    if (allRights.indexOf(right) === -1) {
        throw Error ("right удален")
    }

    allRights.splice(allRights.indexOf(right), 1);
}

// Возвращает массив групп
function groups() {
    return allGroups;
}

// Создает новую группу и возвращает её.
function createGroup(name) {
    //debugger;
    name = "group" + name

    let newGroup ={
        name: name,
        rights: []
    }

    allGroups.push(newGroup)

    return newGroup;
}

// Удаляет группу group
function deleteGroup(group) {
    //debugger;

    if (group === null) {
        throw Error ("group=null")
    }

    if (group === undefined) {
        throw Error ("group=undefined")
    }

    if (allGroups.indexOf(group) === -1) {
        throw Error ("group удален")
    }

    allGroups.splice(allGroups.indexOf(group), 1);

    for (let i =0; i < allUsers.length; i++) {
        removeUserFromGroup(allUsers[i], group)
    }
}

// Возвращает массив прав, которые принадлежат группе group
function groupRights() {
    return allGroups;
}

// Добавляет право right к группе group
function addRightToGroup(right, group) {

    if (right === null) {
        throw Error ("right=null") 
    }

    if (group === null) {
        throw Error ("group=null")
    }

    if (right === undefined) {
        throw Error ("right=undefined")
    }

    if (group === undefined) {
        throw Error ("group=undefined")
    }

    if (allRights.indexOf(right) === -1) {
        throw Error ("right удален")
    }


    if (allGroups.indexOf(group) === -1) {
        throw Error ("group удален")
    }

    group.rights.push(right);

}

// Удаляет право right из группы group. Должна бросить исключение, если права right нет в группе group
function removeRightFromGroup(right, group) {
    //debugger;
    
    if (right === null) {
        throw Error ("right=null")
    }

    if (group === null) {
        throw Error ("group=null")
    }

    if (right === undefined) {
        throw Error ("right=undefined")
    }

    if (group === undefined) {
        throw Error ("group=undefined")
    }

    if (allRights.indexOf(right) === -1) {
        throw Error ("right удален")
    }

    if (allGroups.indexOf(group) === -1) {
        throw Error ("group удален")
    }

    if (group.rights.indexOf(right) === -1) {
        throw Error ("right удален")
    }

    group.rights.splice(group.rights.indexOf(right), 1);

    for (let i =0; i < group.rights.length; i++) {
        removeRightFromGroup(group.rights[i], right)
    }
}

function login(username, password) {
    if (username == username && password == password) {
        return true;
    }  

    if ( user == user && group == group) {
        return true;
    }

}

function currentUser() {
    
}
 

function logout() {}

function isAuthorized(user, right) {}
