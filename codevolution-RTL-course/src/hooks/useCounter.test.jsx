import {renderHook} from '@testing-library/react'
import {useCounter} from './useCounter'

describe('hook test', () =>{

    test('should render initial count', () =>{

      const {result} = renderHook(useCounter)
      expect(result.current.count).toBe(0)
    })

     test('Should accept and render the same initial count', () =>{

        const {result} = renderHook(useCounter,{
            initialProps: 10
        })

        expect(result.current.count).toBe(10)

     })






})