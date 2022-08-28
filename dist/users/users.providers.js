"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const user_entity_1 = require("./entity/user.entity");
exports.usersProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(user_entity_1.User),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=users.providers.js.map