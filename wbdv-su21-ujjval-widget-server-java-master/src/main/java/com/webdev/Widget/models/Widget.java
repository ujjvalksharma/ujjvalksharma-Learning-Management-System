package com.webdev.Widget.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity(name = "widgets")
@Table(name = "widgets")
public class Widget {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String type;
    private Integer size;
    private String text;
    private String topicId;
    private String name;
    private int widgetOrder;
    private String src;
    private int width;
    private int height;
    private String cssClass;
    private String style;
    private String value;
    
	public Widget(Integer id, String type, Integer size, String text, String topicId, String name, int widgetOrder,
			String src, int width, int height, String cssClass, String style, String value) {
		super();
		this.id = id;
		this.type = type;
		this.size = size;
		this.text = text;
		this.topicId = topicId;
		this.name = name;
		this.widgetOrder = widgetOrder;
		this.src = src;
		this.width = width;
		this.height = height;
		this.cssClass = cssClass;
		this.style = style;
		this.value = value;
	}
    
	public Widget() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Integer getSize() {
		return size;
	}

	public void setSize(Integer size) {
		this.size = size;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getTopicId() {
		return topicId;
	}

	public void setTopicId(String topicId) {
		this.topicId = topicId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getWidgetOrder() {
		return widgetOrder;
	}

	public void setWidgetOrder(int widgetOrder) {
		this.widgetOrder = widgetOrder;
	}

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public String getCssClass() {
		return cssClass;
	}

	public void setCssClass(String cssClass) {
		this.cssClass = cssClass;
	}

	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	
    

}
