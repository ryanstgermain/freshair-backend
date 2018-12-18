const db = require('./database_connection')

module.exports = {
    getAllUserAccounts() {
        return db('user_accounts')
    },
    getUserAccountById(id) {
        return db('user_accounts').where('id', id)
    },
    createUserAccount(newUserAccount) {
        return db('user_accounts').insert(newUserAccount).returning('*')
    },
    deleteUserAccount(id) {
        return db('user_accounts').where('id', id).delete()
    },
    updateUserAccount(id, userAccount) {
        return db('user_accounts').where('id', id).update(userAccount).returning('*')
    }
}