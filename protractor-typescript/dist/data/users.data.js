"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserType;
(function (UserType) {
    UserType["IEL"] = "iel";
    UserType["INST"] = "institution";
    UserType["WEB"] = "web";
})(UserType = exports.UserType || (exports.UserType = {}));
exports.users = [
    {
        username: 'fakesampleusername1',
        password: 'fakesampleusername1',
        types: [UserType.IEL, UserType.INST]
    },
    {
        username: 'fakesampleusername2',
        password: 'fakesampleusername2',
        types: [UserType.WEB]
    }
];
exports.instUsers = exports.users.filter((user) => {
    return user.types.some(type => type === UserType.INST);
});
exports.webUsers = exports.users.filter((user) => {
    return user.types.some(type => type === UserType.WEB);
});
//# sourceMappingURL=users.data.js.map