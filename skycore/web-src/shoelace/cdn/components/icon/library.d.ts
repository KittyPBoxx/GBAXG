import type SlIcon from '../icon/icon.js';
export type IconLibraryResolver = (name: string) => string;
export type IconLibraryMutator = (svg: SVGElement) => void;
export interface IconLibrary {
    name: string;
    resolver: IconLibraryResolver;
    mutator?: IconLibraryMutator;
    spriteSheet?: boolean;
}
export declare function watchIcon(icon: SlIcon): void;
export declare function unwatchIcon(icon: SlIcon): void;
export declare function getIconLibrary(name?: string): IconLibrary | undefined;
export declare function registerIconLibrary(name: string, options: Omit<IconLibrary, 'name'>): void;
export declare function unregisterIconLibrary(name: string): void;
