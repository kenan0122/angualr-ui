export interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export const TREE_DATA: TreeNode[] = [
  {
    name: 'parent 1'

  },
  {
    name: 'parent 2'
  }
];
