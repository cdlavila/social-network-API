// Helpers
const statusCode = require('../helpers/status-code')
const Response = require('../helpers/response')

// Service
const UserService = require('../services/user-service')

class UserController {
  static async signUp (req, res) {
    try {
      return await UserService.signUp(res, req?.body)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async signIn (req, res) {
    try {
      return await UserService.signIn(res, req?.body?.email, req?.body?.password)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async requestSignInWithPhone (req, res) {
    try {
      return await UserService.requestSignInWithPhone(res, req?.body?.phone, req?.body?.service)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async signInWithPhone (req, res) {
    try {
      return await UserService.signInWithPhone(res, req?.body?.phone, req?.body?.code)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async requestRecoveryPassword (req, res) {
    try {
      return await UserService.requestRecoveryPassword(res, req?.body?.email)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async recoveryPassword (req, res) {
    try {
      return await UserService.recoveryPassword(res, req?.body?.email, req?.body?.code, req?.body?.password)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async refresh (req, res) {
    try {
      return await UserService.refresh(res, req?.user?.id)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async search (req, res) {
    try {
      return await UserService.search(res, req?.query?.parameter, req?.user?.id)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async getMyself (req, res) {
    try {
      return await UserService.getMyself(res, req?.user?.id)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async getById (req, res) {
    try {
      return await UserService.getById(res, req?.params?.id, req?.user?.id)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async updateMySelf (req, res) {
    try {
      return await UserService.updateMySelf(res, req?.body, req?.user?.id)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async deleteMySelf (req, res) {
    try {
      return await UserService.deleteMySelf(res, req?.user?.id)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }
}

module.exports = UserController
