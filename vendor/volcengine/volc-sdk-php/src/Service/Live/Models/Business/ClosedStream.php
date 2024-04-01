<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/business/stream_manage.proto

namespace Volc\Service\Live\Models\Business;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Live.Models.Business.ClosedStream</code>
 */
class ClosedStream extends \Google\Protobuf\Internal\Message
{
    /**
     * Vhost表示视频直播服务的配置空间
     *
     * Generated from protobuf field <code>string Vhost = 1;</code>
     */
    protected $Vhost = '';
    /**
     * 域名
     *
     * Generated from protobuf field <code>string Domain = 2;</code>
     */
    protected $Domain = '';
    /**
     * 应用名称
     *
     * Generated from protobuf field <code>string App = 3;</code>
     */
    protected $App = '';
    /**
     * 流名称
     *
     * Generated from protobuf field <code>string Stream = 4;</code>
     */
    protected $Stream = '';
    /**
     * 直播流开始时间
     *
     * Generated from protobuf field <code>string StartTime = 5;</code>
     */
    protected $StartTime = '';
    /**
     * 直播流结束时间
     *
     * Generated from protobuf field <code>string EndTime = 6;</code>
     */
    protected $EndTime = '';
    /**
     * 表示推流方式，缺省情况查询全部推流方式。支持如下取值。
     *<li>push:直推流；
     *<li>relay:回源流。
     *
     * Generated from protobuf field <code>string SourceType = 7;</code>
     */
    protected $SourceType = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $Vhost
     *           Vhost表示视频直播服务的配置空间
     *     @type string $Domain
     *           域名
     *     @type string $App
     *           应用名称
     *     @type string $Stream
     *           流名称
     *     @type string $StartTime
     *           直播流开始时间
     *     @type string $EndTime
     *           直播流结束时间
     *     @type string $SourceType
     *           表示推流方式，缺省情况查询全部推流方式。支持如下取值。
     *          <li>push:直推流；
     *          <li>relay:回源流。
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Live\Models\GPBMetadata\StreamManage::initOnce();
        parent::__construct($data);
    }

    /**
     * Vhost表示视频直播服务的配置空间
     *
     * Generated from protobuf field <code>string Vhost = 1;</code>
     * @return string
     */
    public function getVhost()
    {
        return $this->Vhost;
    }

    /**
     * Vhost表示视频直播服务的配置空间
     *
     * Generated from protobuf field <code>string Vhost = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setVhost($var)
    {
        GPBUtil::checkString($var, True);
        $this->Vhost = $var;

        return $this;
    }

    /**
     * 域名
     *
     * Generated from protobuf field <code>string Domain = 2;</code>
     * @return string
     */
    public function getDomain()
    {
        return $this->Domain;
    }

    /**
     * 域名
     *
     * Generated from protobuf field <code>string Domain = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setDomain($var)
    {
        GPBUtil::checkString($var, True);
        $this->Domain = $var;

        return $this;
    }

    /**
     * 应用名称
     *
     * Generated from protobuf field <code>string App = 3;</code>
     * @return string
     */
    public function getApp()
    {
        return $this->App;
    }

    /**
     * 应用名称
     *
     * Generated from protobuf field <code>string App = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setApp($var)
    {
        GPBUtil::checkString($var, True);
        $this->App = $var;

        return $this;
    }

    /**
     * 流名称
     *
     * Generated from protobuf field <code>string Stream = 4;</code>
     * @return string
     */
    public function getStream()
    {
        return $this->Stream;
    }

    /**
     * 流名称
     *
     * Generated from protobuf field <code>string Stream = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setStream($var)
    {
        GPBUtil::checkString($var, True);
        $this->Stream = $var;

        return $this;
    }

    /**
     * 直播流开始时间
     *
     * Generated from protobuf field <code>string StartTime = 5;</code>
     * @return string
     */
    public function getStartTime()
    {
        return $this->StartTime;
    }

    /**
     * 直播流开始时间
     *
     * Generated from protobuf field <code>string StartTime = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setStartTime($var)
    {
        GPBUtil::checkString($var, True);
        $this->StartTime = $var;

        return $this;
    }

    /**
     * 直播流结束时间
     *
     * Generated from protobuf field <code>string EndTime = 6;</code>
     * @return string
     */
    public function getEndTime()
    {
        return $this->EndTime;
    }

    /**
     * 直播流结束时间
     *
     * Generated from protobuf field <code>string EndTime = 6;</code>
     * @param string $var
     * @return $this
     */
    public function setEndTime($var)
    {
        GPBUtil::checkString($var, True);
        $this->EndTime = $var;

        return $this;
    }

    /**
     * 表示推流方式，缺省情况查询全部推流方式。支持如下取值。
     *<li>push:直推流；
     *<li>relay:回源流。
     *
     * Generated from protobuf field <code>string SourceType = 7;</code>
     * @return string
     */
    public function getSourceType()
    {
        return $this->SourceType;
    }

    /**
     * 表示推流方式，缺省情况查询全部推流方式。支持如下取值。
     *<li>push:直推流；
     *<li>relay:回源流。
     *
     * Generated from protobuf field <code>string SourceType = 7;</code>
     * @param string $var
     * @return $this
     */
    public function setSourceType($var)
    {
        GPBUtil::checkString($var, True);
        $this->SourceType = $var;

        return $this;
    }

}

