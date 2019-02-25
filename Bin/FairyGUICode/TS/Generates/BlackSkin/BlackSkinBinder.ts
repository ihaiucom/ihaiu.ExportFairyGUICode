/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import Button from "../../Extends/BlackSkin/Button.ts";
import FlatIconButton from "../../Extends/BlackSkin/FlatIconButton.ts";
import IconButton from "../../Extends/BlackSkin/IconButton.ts";
import AutoSizeButton from "../../Extends/BlackSkin/AutoSizeButton.ts";
import LinkButton from "../../Extends/BlackSkin/LinkButton.ts";
import Checkbox from "../../Extends/BlackSkin/Checkbox.ts";
import ComboBox from "../../Extends/BlackSkin/ComboBox.ts";
import ComboBoxPopup from "../../Extends/BlackSkin/ComboBoxPopup.ts";
import DropdownButton from "../../Extends/BlackSkin/DropdownButton.ts";
import TextInput from "../../Extends/BlackSkin/TextInput.ts";
import NumericInput from "../../Extends/BlackSkin/NumericInput.ts";
import TextArea from "../../Extends/BlackSkin/TextArea.ts";
import ListItem from "../../Extends/BlackSkin/ListItem.ts";
import IconListItem from "../../Extends/BlackSkin/IconListItem.ts";
import CheckIconListItem from "../../Extends/BlackSkin/CheckIconListItem.ts";
import MenuBarItem from "../../Extends/BlackSkin/MenuBarItem.ts";
import PopupMenuItem from "../../Extends/BlackSkin/PopupMenuItem.ts";
import PopupMenu from "../../Extends/BlackSkin/PopupMenu.ts";
import ProgressBar from "../../Extends/BlackSkin/ProgressBar.ts";
import RadioButton from "../../Extends/BlackSkin/RadioButton.ts";
import ScrollBar_VT from "../../Extends/BlackSkin/ScrollBar_VT.ts";
import ScrollUpButton from "../../Extends/BlackSkin/ScrollUpButton.ts";
import ScrollDownButton from "../../Extends/BlackSkin/ScrollDownButton.ts";
import GripButton_VT from "../../Extends/BlackSkin/GripButton_VT.ts";
import ScrollBar_HZ from "../../Extends/BlackSkin/ScrollBar_HZ.ts";
import GripButton_HZ from "../../Extends/BlackSkin/GripButton_HZ.ts";
import ScrollRightButton from "../../Extends/BlackSkin/ScrollRightButton.ts";
import ScrollLeftButton from "../../Extends/BlackSkin/ScrollLeftButton.ts";
import TabCloseButton from "../../Extends/BlackSkin/TabCloseButton.ts";
import ClosableTabButton from "../../Extends/BlackSkin/ClosableTabButton.ts";
import TabButton from "../../Extends/BlackSkin/TabButton.ts";
import TabIconButton from "../../Extends/BlackSkin/TabIconButton.ts";
import ClosableTabIconButton from "../../Extends/BlackSkin/ClosableTabIconButton.ts";
import FileTabButton from "../../Extends/BlackSkin/FileTabButton.ts";
import TitleBar from "../../Extends/BlackSkin/TitleBar.ts";
import TooltipsWin from "../../Extends/BlackSkin/TooltipsWin.ts";
import TreeItem from "../../Extends/BlackSkin/TreeItem.ts";
import TreeExpandButton from "../../Extends/BlackSkin/TreeExpandButton.ts";
import EditableTreeItem from "../../Extends/BlackSkin/EditableTreeItem.ts";
import WindowFrame from "../../Extends/BlackSkin/WindowFrame.ts";
import WindowCloseButton from "../../Extends/BlackSkin/WindowCloseButton.ts";

export default class BlackSkinBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(Button.URL, Button);
		bind(FlatIconButton.URL, FlatIconButton);
		bind(IconButton.URL, IconButton);
		bind(AutoSizeButton.URL, AutoSizeButton);
		bind(LinkButton.URL, LinkButton);
		bind(Checkbox.URL, Checkbox);
		bind(ComboBox.URL, ComboBox);
		bind(ComboBoxPopup.URL, ComboBoxPopup);
		bind(DropdownButton.URL, DropdownButton);
		bind(TextInput.URL, TextInput);
		bind(NumericInput.URL, NumericInput);
		bind(TextArea.URL, TextArea);
		bind(ListItem.URL, ListItem);
		bind(IconListItem.URL, IconListItem);
		bind(CheckIconListItem.URL, CheckIconListItem);
		bind(MenuBarItem.URL, MenuBarItem);
		bind(PopupMenuItem.URL, PopupMenuItem);
		bind(PopupMenu.URL, PopupMenu);
		bind(ProgressBar.URL, ProgressBar);
		bind(RadioButton.URL, RadioButton);
		bind(ScrollBar_VT.URL, ScrollBar_VT);
		bind(ScrollUpButton.URL, ScrollUpButton);
		bind(ScrollDownButton.URL, ScrollDownButton);
		bind(GripButton_VT.URL, GripButton_VT);
		bind(ScrollBar_HZ.URL, ScrollBar_HZ);
		bind(GripButton_HZ.URL, GripButton_HZ);
		bind(ScrollRightButton.URL, ScrollRightButton);
		bind(ScrollLeftButton.URL, ScrollLeftButton);
		bind(TabCloseButton.URL, TabCloseButton);
		bind(ClosableTabButton.URL, ClosableTabButton);
		bind(TabButton.URL, TabButton);
		bind(TabIconButton.URL, TabIconButton);
		bind(ClosableTabIconButton.URL, ClosableTabIconButton);
		bind(FileTabButton.URL, FileTabButton);
		bind(TitleBar.URL, TitleBar);
		bind(TooltipsWin.URL, TooltipsWin);
		bind(TreeItem.URL, TreeItem);
		bind(TreeExpandButton.URL, TreeExpandButton);
		bind(EditableTreeItem.URL, EditableTreeItem);
		bind(WindowFrame.URL, WindowFrame);
		bind(WindowCloseButton.URL, WindowCloseButton);
	}
}