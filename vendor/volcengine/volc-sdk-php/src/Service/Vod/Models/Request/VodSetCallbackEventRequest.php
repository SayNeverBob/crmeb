<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vod/request/request_vod.proto

namespace Volc\Service\Vod\Models\Request;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Vod.Models.Request.VodSetCallbackEventRequest</code>
 */
class VodSetCallbackEventRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * 空间名 
     *
     * Generated from protobuf field <code>string SpaceName = 1;</code>
     */
    protected $SpaceName = '';
    /**
     * 事件列表 
     *
     * Generated from protobuf field <code>string Events = 2;</code>
     */
    protected $Events = '';
    /**
     * 是否开启回调鉴权,值为VodCallbackAuthType中的枚举数字 
     *
     * Generated from protobuf field <code>string AuthEnabled = 3;</code>
     */
    protected $AuthEnabled = '';
    /**
     * 回调鉴权key 
     *
     * Generated from protobuf field <code>string PrivateKey = 4;</code>
     */
    protected $PrivateKey = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $SpaceName
     *           空间名 
     *     @type string $Events
     *           事件列表 
     *     @type string $AuthEnabled
     *           是否开启回调鉴权,值为VodCallbackAuthType中的枚举数字 
     *     @type string $PrivateKey
     *           回调鉴权key 
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Vod\Models\GPBMetadata\RequestVod::initOnce();
        parent::__construct($data);
    }

    /**
     * 空间名 
     *
     * Generated from protobuf field <code>string SpaceName = 1;</code>
     * @return string
     */
    public function getSpaceName()
    {
        return $this->SpaceName;
    }

    /**
     * 空间名 
     *
     * Generated from protobuf field <code>string SpaceName = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setSpaceName($var)
    {
        GPBUtil::checkString($var, True);
        $this->SpaceName = $var;

        return $this;
    }

    /**
     * 事件列表 
     *
     * Generated from protobuf field <code>string Events = 2;</code>
     * @return string
     */
    public function getEvents()
    {
        return $this->Events;
    }

    /**
     * 事件列表 
     *
     * Generated from protobuf field <code>string Events = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setEvents($var)
    {
        GPBUtil::checkString($var, True);
        $this->Events = $var;

        return $this;
    }

    /**
     * 是否开启回调鉴权,值为VodCallbackAuthType中的枚举数字 
     *
     * Generated from protobuf field <code>string AuthEnabled = 3;</code>
     * @return string
     */
    public function getAuthEnabled()
    {
        return $this->AuthEnabled;
    }

    /**
     * 是否开启回调鉴权,值为VodCallbackAuthType中的枚举数字 
     *
     * Generated from protobuf field <code>string AuthEnabled = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setAuthEnabled($var)
    {
        GPBUtil::checkString($var, True);
        $this->AuthEnabled = $var;

        return $this;
    }

    /**
     * 回调鉴权key 
     *
     * Generated from protobuf field <code>string PrivateKey = 4;</code>
     * @return string
     */
    public function getPrivateKey()
    {
        return $this->PrivateKey;
    }

    /**
     * 回调鉴权key 
     *
     * Generated from protobuf field <code>string PrivateKey = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setPrivateKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->PrivateKey = $var;

        return $this;
    }

}

