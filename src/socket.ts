import type net from 'net';
import type tls from 'tls';

type AdditionalProps = { proxyChainId?: symbol };

export type Socket = net.Socket & AdditionalProps;
export type TLSSocket = tls.TLSSocket & AdditionalProps;
