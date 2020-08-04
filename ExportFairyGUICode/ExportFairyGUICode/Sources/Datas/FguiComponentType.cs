using System;
using System.Collections.Generic;
using System.Text;


public static class fgui
{
    public static class NodeName
    {
        public const string controller = "controller";
        public const string transition = "transition";
        public const string displayList = "displayList";
        // 图片
        public const string image = "image";
        // 文本
        public const string text = "text";
        // 富文本
        public const string richtext = "richtext";
        // 图形
        public const string graph = "graph";
        // 组
        public const string group = "group";
        // 装载器
        public const string loader = "loader";
        // 列表
        public const string list = "list";
        // 序列帧动画
        public const string movieclip = "movieclip";
        // 组件
        public const string component = "component";
    }

    public static class ExtendType
    {
        // 按钮
        public const string Button = "Button";

        // 下拉框
        public const string ComboBox = "ComboBox";

        // 标签
        public const string Label = "Label";

        // 进度条
        public const string ProgressBar = "ProgressBar";

        // 滚动条
        public const string ScrollBar = "ScrollBar";

        // 滑动条
        public const string Slider = "Slider";


        // 组件
        public const string Component = "Component";

        public static string GetExtendClass(string name)
        {
            string cls = CommonName.GComponent;
            switch(name)
            {
                case Button:
                    cls = CommonName.GButton;
                    break;
                case ComboBox:
                    cls = CommonName.GComboBox;
                    break;
                case Label:
                    cls = CommonName.GLabel;
                    break;
                case ProgressBar:
                    cls = CommonName.GProgressBar;
                    break;
                case ScrollBar:
                    cls = CommonName.GScrollBar;
                    break;
                case Slider:
                    cls = CommonName.GSlider;
                    break;
            }
            return cls;
        }

    }


    public static class CommonName
    {
        // 对象
        public const string GObject = "fgui.GObject";

        // 组件
        public const string GComponent = "fgui.GComponent";

        // 控制器
        public const string Controller = "fgui.Controller";

        // 动效
        public const string Transition = "fgui.Transition";

        // 图片
        public const string GImage = "fgui.GImage";

        // 文本
        public const string GTextField = "fgui.GTextField";

        // 文本输入
        public const string GTextInput = "fgui.GTextInput";

        // 富文本
        public const string GRichTextField = "fgui.GRichTextField";

        // 图形
        public const string GGraph = "fgui.GGraph";

        // 组
        public const string GGroup = "fgui.GGroup";

        // 装载器
        public const string GLoader = "fgui.GLoader";


        // 列表
        public const string GList = "fgui.GList";

        // 序列帧动画
        public const string GMovieClip = "fgui.GMovieClip";




        // 按钮
        public const string GButton = "fgui.GButton";

        // 下拉框
        public const string GComboBox = "fgui.GComboBox";

        // 标签
        public const string GLabel = "fgui.GLabel";

        // 进度条
        public const string GProgressBar = "fgui.GProgressBar";

        // 滚动条
        public const string GScrollBar = "fgui.GScrollBar";

        // 滑动条
        public const string GSlider = "fgui.GSlider";


    }

    public static class ButtonType
    {
        // 普通
        public const string Normal = "";

        // 多选
        public const string Check = "Check";

        // 单选
        public const string Radio = "Radio";

    }

    public static class TextType
    {

        // 普通
        public const string Normal = "";
        // 输入
        public const string Input = "input";
    }



}