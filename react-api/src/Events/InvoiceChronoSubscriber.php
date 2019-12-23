<?php


namespace App\Events;


use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Invoice;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\GetResponseForControllerResultEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Core\Security;
use App\Repository\InvoiceRepository;

class InvoiceChronoSubscriber implements EventSubscriberInterface
{
    private $security;
    private $repository;

    public function __construct(Security $security, InvoiceRepository $repository)
    {
        $this->security = $security;
        $this->repository = $repository;
    }

    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents()
    {
        return [
          KernelEvents::VIEW => ['setChronoForInvoice', EventPriorities::PRE_VALIDATE]
        ];
    }

    public function setChronoForInvoice (GetResponseForControllerResultEvent $event)
    {
        $invoice = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

//        dd($nextChrono = $this->repository->findNextChrono($this->security->getUser()));

        if ($invoice instanceof Invoice && $method === "POST"){

            $nextChrono = $this->repository->findNextChrono($this->security->getUser());
            $invoice->setChrono($nextChrono);
//            dd($invoice);
            // TODO: A déplacer dans une classe dédié
            if (empty($invoice->getSentAt())){
                $invoice->setSentAt(new \DateTime());
            }
        }
    }
}