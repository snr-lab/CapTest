export interface AppPluginsType {
    test(options: { [key: string]: any }): Promise<{ [key: string]: any }>
}