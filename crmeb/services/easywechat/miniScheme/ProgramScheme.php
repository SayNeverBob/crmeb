<?php

namespace crmeb\services\easywechat\miniScheme;

use EasyWeChat\Core\AbstractAPI;
use EasyWeChat\Core\AccessToken;

class ProgramScheme extends AbstractAPI
{
    const URL_SCHEME_API = 'https://api.weixin.qq.com/wxa/generatescheme';

    public function __construct(AccessToken $accessToken)
    {
        parent::__construct($accessToken);
    }

    public function getUrlScheme($jumpWxa = [], $expireType = -1, $expireNum = 0)
    {
        $params = [];
        if (!empty($jumpWxa)) $params['jump_wxa'] = $jumpWxa;
        if ($expireType != -1) {
            $params['expire_type'] = (int)$expireType;
            $params['is_expire'] = true;
        } else {
            $params['is_expire'] = false;
        }
        if ($expireType == 0) $params['expire_time'] = (int)$expireNum;
        if ($expireType == 1) $params['expire_interval'] = (int)$expireNum;
        return $this->parseJSON('post', [self::URL_SCHEME_API, json_encode($params)]);
    }
}