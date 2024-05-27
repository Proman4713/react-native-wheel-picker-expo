import type { FlatListProps } from 'react-native';

export type ItemType = { label: string; value: any };
export type RenderItemProps = {
	fontSize: number;
	label: string;
	fontColor: string;
	textAlign: 'center' | 'auto' | 'left' | 'right' | 'justify';
};

export interface IViuPickerProps {
	items: ItemType[];
	onChange: (item: { index: number; item: ItemType }) => void;
	initialSelectedIndex?: number;
	height?: number;
	width?: any;
	flatListProps?: Partial<FlatListProps<ItemType>>;
	backgroundColor?: string;
	selectedStyle?: {
		borderColor?: string;
		borderWidth?: number;
		color?: string;
	};
	renderItem?: (props: RenderItemProps) => JSX.Element;
	haptics?: boolean;
	opacity?: number;
	noGrad?: boolean;
}

export interface IViuPickerState {
	selectedIndex: number;
	itemHeight: number;
	listHeight: number;
	data: ItemType[];
}
