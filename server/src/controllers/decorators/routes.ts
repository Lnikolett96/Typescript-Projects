import 'reflect-metadata'
import { Methods } from '../Methods'
import { MetadataKeys } from './MetadataKeys'


function routeBinder(method: string): Function {
    return function(path: string) {
        return function(target: any, key: string, desc: PropertyDescriptor) : void {
            Reflect.defineMetadata(MetadataKeys.PATH, path, target, key)        
            Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key)        
        }
        
    }
}

export const get = routeBinder(Methods.get)
export const post = routeBinder(Methods.post)
export const put = routeBinder(Methods.put)
export const del = routeBinder(Methods.del)
export const patch = routeBinder(Methods.patch)