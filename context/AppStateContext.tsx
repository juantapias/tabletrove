'use client'

import { useCallback, useReducer } from 'react'
import constate from 'constate'
import { IBooking, ICategory, IProduct, IProm } from '@/utils'


type AppState = {
  isLoading: boolean
  isServices: boolean
  inRestaurant: boolean
  booking?: IBooking
  products: IProduct[]
  categories: ICategory[]
  proms: IProm[]
  cart: IProduct[]
}

const initialState: AppState = {
  isLoading: false,
  isServices: false,
  inRestaurant: false,
  products: [],
  categories: [],
  proms: [],
  cart: []
}

type Action =
  | {
      type: 'SET_LOADING'
      payload: boolean
    }
  | {
      type: 'SET_IS_SERVICES'
      payload: boolean
    }
  | {
      type: 'SET_IN_RESTAURANT'
      payload: boolean
    }
  | {
      type: 'SET_PRODUCTS'
      payload: IProduct[]
    }
  | {
      type: 'SET_CATEGORIES'
      payload: ICategory[]
    }
  | {
      type: 'SET_PROMS'
      payload: IProm[]
    }
  | {
      type: 'SET_BOOKING'
      payload: IBooking
    }
  | {
      type: 'ADD_ITEM_CART'
      payload: IProduct
    }
  | {
      type: 'SET_QUANTITY'
      payload: IProduct
    }
  | {
      type: 'REMOVE_ITEM_CART'
      payload: IProduct
    }
  | {
      type: 'CLEAR_CART'
    }

const productInList = (cartList: any, productToAdd: any) =>
  !!cartList.filter((prod: IProduct) => prod.id === productToAdd.id).length

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_IS_SERVICES':
      return { ...state, isServices: action.payload }
    case 'SET_IN_RESTAURANT':
      return { ...state, inRestaurant: action.payload }
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload }
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'SET_PROMS':
      return { ...state, proms: action.payload }
    case 'SET_BOOKING':
      return { ...state, booking: action.payload }
    case 'ADD_ITEM_CART':
      if (productInList(state.cart, action.payload)) {
        return {
          ...state,
          cart: state.cart.map(prod => {
            if (prod.id === action.payload.id) {
              return { ...prod }
            }
            return prod
          })
        }
      }
      return { ...state, cart: [...state.cart, action.payload] }
    case 'SET_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(prod => {
          if (prod.id === action.payload.id) {
            return { ...prod, quantity: action.payload.quantity }
          }
          return prod
        })
      }
    case 'REMOVE_ITEM_CART':
      return {
        ...state,
        cart: state.cart.filter(prod => prod.id !== action.payload.id)
      }
    case 'CLEAR_CART':
      return { ...state, cart: [] }
  }
}

const useAppState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const isLoading = (isLoading: boolean) => {
    dispatch({
      type: 'SET_IS_SERVICES',
      payload: isLoading
    })
  }

  const setIsServices = (isServices: boolean) => {
    dispatch({
      type: 'SET_IS_SERVICES',
      payload: isServices
    })
  }

  const setInRestaurant = (inRestaurant: boolean) => {
    dispatch({
      type: 'SET_IN_RESTAURANT',
      payload: inRestaurant
    })
  }

  const setProducts = useCallback(
    (products: IProduct[]) => {
      dispatch({
        type: 'SET_PRODUCTS',
        payload: products
      })
    },
    [dispatch]
  )

  const setCategories = useCallback(
    (categories: ICategory[]) => {
      dispatch({
        type: 'SET_CATEGORIES',
        payload: categories
      })
    },
    [dispatch]
  )

  const setProms = useCallback(
    (proms: IProm[]) => {
      dispatch({
        type: 'SET_PROMS',
        payload: proms
      })
    },
    [dispatch]
  )

  const setBooking = useCallback(
    (booking: IBooking) => {
      dispatch({
        type: 'SET_BOOKING',
        payload: booking
      })
    },
    [dispatch]
  )

  const addItemCart = useCallback(
    (product: IProduct) => {
      dispatch({ type: 'ADD_ITEM_CART', payload: product })
    },
    [dispatch]
  )

  const setQuantity = useCallback(
    (product: IProduct) => {
      dispatch({ type: 'SET_QUANTITY', payload: product })
    },
    [dispatch]
  )

  const removeItemCart = useCallback(
    (product: IProduct) => {
      dispatch({ type: 'REMOVE_ITEM_CART', payload: product })
    },
    [dispatch]
  )

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [dispatch])

  return {
    ...state,
    isLoading,
    setIsServices,
    setInRestaurant,
    setProducts,
    setCategories,
    setProms,
    setBooking,
    addItemCart,
    setQuantity,
    removeItemCart,
    clearCart
  }
}

const [AppStateProvider, useAppStateContext] = constate(useAppState)

export { AppStateProvider, useAppStateContext }
