<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vod/business/vod_cdn.proto

namespace Volc\Service\Vod\Models\Business;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Vod.Models.Business.VodDescribeVodDomainTrafficDataResult</code>
 */
class VodDescribeVodDomainTrafficDataResult extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated string DomainList = 1;</code>
     */
    private $DomainList;
    /**
     * Generated from protobuf field <code>string StartTime = 2;</code>
     */
    protected $StartTime = '';
    /**
     * Generated from protobuf field <code>string EndTime = 3;</code>
     */
    protected $EndTime = '';
    /**
     * Generated from protobuf field <code>int32 Aggregation = 4;</code>
     */
    protected $Aggregation = 0;
    /**
     * Generated from protobuf field <code>string TrafficType = 5;</code>
     */
    protected $TrafficType = '';
    /**
     * Generated from protobuf field <code>double TotalTraffic = 6;</code>
     */
    protected $TotalTraffic = 0.0;
    /**
     * Generated from protobuf field <code>repeated .Volcengine.Vod.Models.Business.VodTrafficData TrafficDataList = 7;</code>
     */
    private $TrafficDataList;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string[]|\Google\Protobuf\Internal\RepeatedField $DomainList
     *     @type string $StartTime
     *     @type string $EndTime
     *     @type int $Aggregation
     *     @type string $TrafficType
     *     @type float $TotalTraffic
     *     @type \Volc\Service\Vod\Models\Business\VodTrafficData[]|\Google\Protobuf\Internal\RepeatedField $TrafficDataList
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Vod\Models\GPBMetadata\VodCdn::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated string DomainList = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getDomainList()
    {
        return $this->DomainList;
    }

    /**
     * Generated from protobuf field <code>repeated string DomainList = 1;</code>
     * @param string[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setDomainList($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->DomainList = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string StartTime = 2;</code>
     * @return string
     */
    public function getStartTime()
    {
        return $this->StartTime;
    }

    /**
     * Generated from protobuf field <code>string StartTime = 2;</code>
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
     * Generated from protobuf field <code>string EndTime = 3;</code>
     * @return string
     */
    public function getEndTime()
    {
        return $this->EndTime;
    }

    /**
     * Generated from protobuf field <code>string EndTime = 3;</code>
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
     * Generated from protobuf field <code>int32 Aggregation = 4;</code>
     * @return int
     */
    public function getAggregation()
    {
        return $this->Aggregation;
    }

    /**
     * Generated from protobuf field <code>int32 Aggregation = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setAggregation($var)
    {
        GPBUtil::checkInt32($var);
        $this->Aggregation = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string TrafficType = 5;</code>
     * @return string
     */
    public function getTrafficType()
    {
        return $this->TrafficType;
    }

    /**
     * Generated from protobuf field <code>string TrafficType = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setTrafficType($var)
    {
        GPBUtil::checkString($var, True);
        $this->TrafficType = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double TotalTraffic = 6;</code>
     * @return float
     */
    public function getTotalTraffic()
    {
        return $this->TotalTraffic;
    }

    /**
     * Generated from protobuf field <code>double TotalTraffic = 6;</code>
     * @param float $var
     * @return $this
     */
    public function setTotalTraffic($var)
    {
        GPBUtil::checkDouble($var);
        $this->TotalTraffic = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .Volcengine.Vod.Models.Business.VodTrafficData TrafficDataList = 7;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getTrafficDataList()
    {
        return $this->TrafficDataList;
    }

    /**
     * Generated from protobuf field <code>repeated .Volcengine.Vod.Models.Business.VodTrafficData TrafficDataList = 7;</code>
     * @param \Volc\Service\Vod\Models\Business\VodTrafficData[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setTrafficDataList($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Volc\Service\Vod\Models\Business\VodTrafficData::class);
        $this->TrafficDataList = $arr;

        return $this;
    }

}

